/*
7. Request profile of the professor that user wants to see
     professor: name of professor that user wants to see
*/  


_handleProfessorProfile = async () => {
    var url = server.serverURL + '/courseevaluations/showprofessorprofile';  
    
    await this.setState({
      isLoading: true
    });
    await axios.post(url, {
      professor: "pro1"
      }) 
        .then((response) => {       
            this.setState({ 
              isLoading: false
            });  
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server. Falling back to default option.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            ); 
        });    
    }