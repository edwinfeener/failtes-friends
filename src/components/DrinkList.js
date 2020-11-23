import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';
import { listDrinks } from '../graphql/queries';
import { deleteDrink as deleteDrinkMutation } from '../graphql/mutations';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function DrinkList(props) {
  const [drinks, setDrinks] = useState([]);

  const styles = {
    trHeader: {borderBottom: '1px solid black', textAlign: 'left'},
    tr: {textAlign: 'left'},
    td: {}
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    const apiData = await API.graphql({ query: listDrinks });
    setDrinks(apiData.data.listDrinks.items);
  }

  async function deleteDrink({ id }) {
    const newDrinksArray = drinks.filter(drink => drink.id !== id);
    setDrinks(newDrinksArray);
    await API.graphql({ query: deleteDrinkMutation, variables: { input: { id } }});
  }

  function rateDrink({id}) {

  }

  return (
    <div style={{ marginTop: '50px', marginLeft: '30px'}}>
      <div style={{marginBottom: '50px'}}>
        <Typography variant='h4'>Drink List</Typography>
      </div>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <tr style={styles.trHeader}>
          <th style={styles.td}><Typography variant='body1'>Name</Typography></th>
          <th style={styles.td}><Typography variant='body1'>Ingredients</Typography></th>
          <th style={styles.td}><Typography variant='body1'>Instructions</Typography></th>
          <th style={styles.td}><Typography variant='body1'>Author</Typography></th>
          <th style={styles.td}><Typography variant='body1'>Rating</Typography></th>
        </tr>
        {
          drinks.map(drink => (
            <tr style={styles.tr}>
              <td style={styles.td}>
                <Typography variant='body2'>{drink.name}</Typography>
              </td>
              <td style={styles.td}>
                <Typography variant='body2'>{drink.ingredients}</Typography>
              </td>
              <td style={styles.td}>
                <Typography variant='body2'>{drink.instructions}</Typography>
              </td>
              <td style={styles.td}>
                <Typography variant='body2'>{drink.author}</Typography>
              </td>
              <td style={styles.td}>
                <Typography variant='body2'>{drink.averageScore}</Typography>
              </td>
              {drink.author === props.currentUser && 
              <td style={styles.td}>
                <Button onClick={() => deleteDrink(drink)}>Delete</Button>
              </td>}
              {drink.author !== props.currentUser && 
              <td style={styles.td}>
                <Button onClick={() => rateDrink(drink)}>Rate</Button>
              </td>}
            </tr>
          ))
      }
      </table>
    </div>
  );
}

export default DrinkList;