/*
4. Add report  
     commentid: specifies current courseid. located: 'l.commentid' in EvaluationScreen  
     userid: specifies current userid. located: x. (헌남 also didn't do this part.)
*/  

_handleAddReport = async() => { 
    var url = server.serverURL + '/bulletinboards/addreport';
    await axios.post(url, {
      boardid: "CourseEvaluation",  
      commentid: "5d7dd78efbc83a72bb7b4dec",  
      userid: "5d5373177443381df03f3040"
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
      })    
  };