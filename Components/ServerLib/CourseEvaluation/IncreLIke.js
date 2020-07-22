/*
5. Increase value of 'likes' 1 of a requested reply
     courseid: specifies current courseid. located: 'this.state.courseid' in EvaluationScreen 
     commentid: specifies current courseid. located: 'l.commentid' in EvaluationScreen 
     userid: specifies current userid. located: x. (헌남 also didn't do this part.)  
     likespressed: specifies whether current user whose id is userid, pressed 'like' button on this comment whose id is 'commentid' 
     
     (_handleGetCommentsList from Components\Course_Evaluation\screen\EvaluationScreen.js gets 'response.data.likespressed' 
     which specifies 'likepresssed' value. you need to pass this value.) 

    if(likespressed==false) => likes +1 for the reply 
    if(likespressed==true) => likes -1 for the reply 
    But for now, I used 'false' to prevent errors  

    return values

  response.data.msg => message in cases of: failure of searching user / course / reply  
  response.data.likespressed => returns result of 'likespressed' after implemented each functions 
  ex. before executing function that increases 'likes' by 1: likespressed == false => after execution: likespressed == true
  
  response.data.likes => # of likes after each functions
*/  

_handleIncreLike = async () => { 

  var likepresssed = true; 

  if(likepresssed){
    var url = server.serverURL + '/courseevaluations/decrelikecomment';
  } 
  else{ 
    
    var url = server.serverURL + '/courseevaluations/increlikecomment';
  }    
  await this.setState({
    isLoading: true
  });
  await axios.post(url, {
    courseid: "5d7c784f4f5664d7652bec5b",  
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
      });    
  }