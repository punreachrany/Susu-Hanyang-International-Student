/*
2. Edit a reply and send to the server
     courseid: specifies current courseid. located: 'this.state.courseid' in EvaluationScreen 
     commentid: specifies current courseid. located: 'l.commentid' in EvaluationScreen
     contents,exam,assignment,grade,difficulty, rating 
*/ 

_handleEditComment = async () => {
    var url = server.serverURL + '/courseevaluations/editcomment';  
    
    await this.setState({
      isLoading: true
    });
    await axios.post(url, {
      courseid: "5d7b68b52ec3549472239b79",  
      commentid: "5d7e0983f63f5a278c2a890d",  
      contents: " ", 
      exam: this.state.exam,
      assignment: this.state.assignment,
      grade: this.state.Grade_Array[this.state.grade], 
      difficulty: this.state.Difficulty_Array[this.state.difficulty],
      rating: this.state.rate
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