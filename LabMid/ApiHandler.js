import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

export default function useFetchData() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(0);

  const getProducts = async (url) => {
      axios.get(url)
        .then(response => {
          //remember to set this up again
          setData(response.data.products);
        })
        .catch(error => {
          setError(error.message);
        });
  }

  /*
  Thing to remember about axios is that it takes the url, the JS object, no need 
  to stringify it or something, the response is also parsed so no need to worry about 
  it either.
  */
  const postRequest = async (url, data) => {
    axios.post(url, data)
      .then(response => {
        //console.log(response.data);
        //console.log(response.data.data);
        //remember to set this up again
        Alert.alert('Sucess!', 'User added: ' + response.data.data.name)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const signloginUp = async (url, data) => {
    axios.post(url, data)
      .then(response => {
        console.log("we are here");
        //remember to set this up again
        console.log(response.data.token);
        Alert.alert(response.data.user.userId);
      })
      .catch(error => {
        console.log(error.message + '   ' + error.response.data.message)
      })
  }

  return {data,setData, getProducts, postRequest, signloginUp};
}

