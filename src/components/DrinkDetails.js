import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';
import { listReviews } from '../graphql/queries';
import { createReview as createReviewMutation, deleteReview as deleteReviewMutation } from '../graphql/mutations';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function DrinkDetails(props) {
  const [reviews, setReviews] = useState([]);
  const styles = {
    trHeader: {borderBottom: '1px solid black', textAlign: 'left'},
    tr: {textAlign: 'left'},
    td: {}
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    const apiData = await API.graphql({ query: listReviews });
    setReviews(apiData.data.listReviews.items);
  }

  const initialFormState = { userID: props.currentUser, content: '', score: '', drinkID: props.drinkDetails.id }

  const [formData, setFormData] = useState(initialFormState);

  async function createReview() {
    if (!formData.content && !formData.score) return;
    await API.graphql({ query: createReviewMutation, variables: { input: formData } });
    setFormData(initialFormState);
    fetchReviews();
  }

  async function deleteReview({ id }) {
    const newReviewsArray = reviews.filter(review => review.id !== id);
    setReviews(newReviewsArray);
    await API.graphql({ query: deleteReviewMutation, variables: { input: { id } }});
  }

  function hasReviewed() {
    return reviews.find(review => review.userID === props.currentUser);
  }

  function getReviewForm() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <TextField id='create-review-content' label='Review'
            onChange={e => setFormData({ ...formData, 'content': e.target.value})}
            value={formData.content} />
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <TextField id='create-review-score' label='Score'
            onChange={e => setFormData({ ...formData, 'score': e.target.value})}
            value={formData.score} />
      </div>
      <div>
        <Button onClick={createReview}><Typography variant='body1'>Submit Review</Typography></Button>
      </div>
    </div>
    );
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
      <div style={{marginBottom: '50px'}}>
        <Typography variant='h4'>{props.drinkDetails.name}</Typography>
      </div>
      <div style={{marginBottom: '50px'}}>
        <Typography variant='h5'>Ingredients:</Typography>
        <Typography>{props.drinkDetails.ingredients}</Typography>
      </div>
      <div style={{marginBottom: '50px'}}>
        <Typography variant='h5'>Instructions:</Typography>
        <Typography>{props.drinkDetails.instructions}</Typography>
      </div>
      <div style={{marginTop: '50px', marginBottom: '50px', width: '55%'}}>
        <table style={{borderCollapse: 'collapse', width: '100%'}}>
          <tr style={styles.trHeader}>
            <th style={styles.td}><Typography variant='body1'>Review</Typography></th>
            <th style={styles.td}><Typography variant='body1'>Score</Typography></th>
            <th style={styles.td}><Typography variant='body1'>User</Typography></th>
          </tr>
          {
            reviews.map(review => (
              <tr style={styles.tr}>
                <td style={styles.td}>
                  <Typography variant='body2'>{review.content}</Typography>
                </td>
                <td style={styles.td}>
                  <Typography variant='body2'>{review.score}</Typography>
                </td>
                <td style={styles.td}>
                  <Typography variant='body2'>{review.userID}</Typography>
                </td>
                {review.userID === props.currentUser && 
                <td>
                  <Button onClick={() => deleteReview(review)}>Delete</Button>
                </td>}
              </tr>
            ))
        }
        </table>
      </div>
      {!hasReviewed() && <div style={{marginBottom: '50px'}}>
          {getReviewForm()}
      </div>
      }
      <div>
        <Button onClick={props.onClose}>Close</Button>
      </div>
    </div>
  );
}

export default DrinkDetails;