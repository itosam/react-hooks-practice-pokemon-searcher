
import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  
  const [formData, setFormData]= useState({
    name:"",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })
  
  const handleChange = (e) => {
    setFormData(
      {...formData, 
        [e.target.name]: e.target.value
       })
  }
    const handleSubmit = (e) => {
      e.preventDefault()
      let newPokemon = {
        name: formData.name,
        hp: formData.hp,
        sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
      }
      addPokemon(newPokemon)
    }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm