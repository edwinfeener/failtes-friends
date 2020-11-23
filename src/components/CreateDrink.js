import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import { createDrink as createDrinkMutation } from '../graphql/mutations';

function CreateDrink(props) {
  const initialFormState = { name: '', description: '', ingredients: '', instructions: '', author: props.currentUser }

  const [formData, setFormData] = useState(initialFormState);

  async function createDrink() {
    if (!formData.name) return;
    await API.graphql({ query: createDrinkMutation, variables: { input: formData } });
    setFormData(initialFormState);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <TextField id='create-drink-name' label='Name'
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            value={formData.name} />
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
        <TextareaAutosize id='create-drink-ingredients' placeholder='Ingredients' rowsMin={20}
          onChange={e => setFormData({ ...formData, 'ingredients': e.target.value})}
          style={{width: '600px'}}
          value={formData.ingredients} />
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
      <TextareaAutosize id='create-drink-instructions' placeholder='Instructions' rowsMin={20}
          onChange={e => setFormData({ ...formData, 'instructions': e.target.value})}
          style={{width: '600px'}}
          value={formData.instructions} />
      </div>
      <div>
        <Button onClick={createDrink}><Typography variant='body1'>Create Drink</Typography></Button>
      </div>
    </div>
  );
}

export default CreateDrink;