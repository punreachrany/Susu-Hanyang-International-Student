/*
3. Delete a requested reply
     courseid: specifies current courseid. located: 'this.state.courseid' in EvaluationScreen 
     commentid: specifies current courseid. located: 'l.commentid' in EvaluationScreen
*/ 

_handleDeleteComment = async () => {
    var url = server.serverURL + '/courseevaluations/deletecomment';  
    
    await this.setState({
      isLoading: true
    });
    await axios.post(url, {
      courseid: "5d7b68b52ec3549472239b79",  
      commentid: "5d7e0983f63f5a278c2a890d",  
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