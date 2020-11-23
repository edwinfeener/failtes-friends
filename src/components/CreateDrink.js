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
    alert('CREATING DRINK ' + JSON.stringify(formData));
    await API.graphql({ query: createDrinkMutation, variables: { input: formData } });
    setFormData(initialFormState);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <TextField id='create-drink-name' label='Name'
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            value={formData.name} />
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
        <TextareaAutosize id='create-drink-ingredients' label='Ingredients' rowsMin={20}
          onChange={e => setFormData({ ...formData, 'ingredients': e.target.value})}
          style={{width: '600px'}} />
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
      <TextareaAutosize id='create-drink-instructions' label='Instructions' rowsMin={20}
          onChange={e => setFormData({ ...formData, 'instructions': e.target.value})}
          style={{width: '600px'}} />
      </div>
      <div>
        <Button onClick={createDrink}>Create Drink</Button>
      </div>
    </div>
  );
}

export default CreateDrink;