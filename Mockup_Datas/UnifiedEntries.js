/*
작성자 : 추헌남
최초작성일 : 2019/08/16
설명 : 컴포넌트에서 테스트할 엔트리 통합 정리
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    Prop 안받음
*/

//BulletinBoards List
//boardid : 게시판 id 번호
//boardname : ""
export const BulletinBoardsLists_Mock = [
    {
        boardid: 0,
        boardname: 'BulletinBoard 0',
        contents: 'This board is \'Omega and Alpha\'.'
    },
    {
        boardid: 1,
        boardname: "Notice Board",
        contents: 'This board is for the notice.'
    },
    {
        boardid: 2,
        boardname: "Free Board",
        contents: 'Boards for you.'
    },
];



//BulletinBoards Mock
//userid :  해당 유저의 id
//username : 해당 유저의 이름
//profile : 해당 유저의 프로필 사진
//likes : 좋아요 갯수
//date : 작성 날짜
//ismine : 본인 글인지 여부
//title : 게시글 제목
//contents : 게시글 내용
//pictures : 삽입된 사진 링크

export const BulletinBoardsEntries_Mock = [
    {
        boardid: 0,
        entryid: 112,
        userid: 1,
        username: 'blackpanther',
        profile: 'IMAGELINK (To be implemented)',
        likes: 200,
        date: '2019-08-20',
        ismine: true,
        title: 'Why you little!!',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna. Fermentum et sollicitudin ac orci phasellus egestas. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Enim sit amet venenatis urna cursus. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Eget lorem dolor sed viverra ipsum nunc. Quam quisque id diam vel quam elementum pulvinar etiam non.',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 321,
        userid: 2,
        username: 'loveyou',
        profile: 'IMAGELINK (To be implemented)',
        likes: 1,
        date: '2019-07-21',
        ismine: false,
        title: 'Ac tincidunt vitae semper quis lectus nulla at. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Ultrices vitae auctor eu augue. A arcu cursus vitae congue. Cras fermentum odio eu feugiat pretium. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Sit amet purus gravida quis. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Risus commodo viverra maecenas accumsan lacus vel facilisis. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sapien pellentesque habitant morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean. Urna nec tincidunt praesent semper feugiat nibh. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Sed adipiscing diam donec adipiscing tristique risus nec.',
        contents: 'I am yesman',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 10,
        userid: 441,
        username: 'good',
        profile: 'IMAGELINK (To be implemented)',
        likes: 23,
        date: '2019-02-21',
        ismine: false,
        title: 'In ante metus dictum at tempor commodo ullamcorper. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Vel facilisis volutpat est velit egestas dui. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Orci a scelerisque purus semper eget. Integer eget aliquet nibh praesent tristique magna. Viverra mauris in aliquam sem fringilla ut. Sed risus pretium quam vulputate. Convallis posuere morbi leo urna molestie at elementum eu. Ultrices neque ornare aenean euismod elementum nisi quis. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Elementum tempus egestas sed sed risus pretium quam.',
        contents: 'Etiam sit amet nisl purus in. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Felis donec et odio pellentesque diam. Tempus urna et pharetra pharetra massa. A iaculis at erat pellentesque adipiscing commodo. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Pharetra vel turpis nunc eget. Augue neque gravida in fermentum et sollicitudin ac orci. Orci porta non pulvinar neque laoreet. Praesent elementum facilisis leo vel fringilla. Vulputate odio ut enim blandit volutpat maecenas volutpat.',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 32,
        userid: 1,
        username: 'dodo',
        profile: 'IMAGELINK (To be implemented)',
        likes: 200,
        date: '2019-08-20',
        ismine: false,
        title: 'aaasdf',
        contents: 'Love Simpsons!',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 51,
        userid: 2,
        username: 'asdf123',
        profile: 'IMAGELINK (To be implemented)',
        likes: 1,
        date: '2019-07-21',
        ismine: false,
        title: '!!!@#',
        contents: 'I am yesman',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 1023,
        userid: 441,
        username: 'good',
        profile: 'IMAGELINK (To be implemented)',
        likes: 23,
        date: '2019-02-21',
        ismine: false,
        title: 'as hell',
        contents: 'yeah',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 11422,
        userid: 1,
        username: 'blackpanther',
        profile: 'IMAGELINK (To be implemented)',
        likes: 200,
        date: '2019-08-20',
        ismine: true,
        title: 'Why you little!!',
        contents: 'Love Simpsons!',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 325211,
        userid: 2,
        username: 'loveyou',
        profile: 'IMAGELINK (To be implemented)',
        likes: 1,
        date: '2019-07-21',
        ismine: false,
        title: 'yes',
        contents: 'I am yesman',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 103321,
        userid: 441,
        username: 'good',
        profile: 'IMAGELINK (To be implemented)',
        likes: 23,
        date: '2019-02-21',
        ismine: false,
        title: 'as hell',
        contents: 'yeah',
        pictures: 'IMAGELINK (To be implemented)'
    },
];

//Comment Mock
//boardid: 부모 게시글의 id
//entryid : 부모 댓글의 id 
//replyid: 해당 댓글의 id 
//parentreplyid: 해당 댓글의 부모 id 
//rootreplyid: 최상위 댓글의 id
//userid :  해당 유저의 id
//username : 해당 유저의 이름
//profile : 해당 유저의 프로필 사진
//likes : 좋아요 갯수
//date : 작성 날짜
//ismine : 본인 글인지 여부
//contents : 댓글 내용
//pictures : 삽입된 사진 링크
  

export const CommentEntries_Mock = [
    {
        boardid: 0, 
        entryid: 321,
        replyid: 132, 
        parentreplyid: 51,
        rootreplyid: 5,
        userid: 1,
        username: 'guide',
        profile: 'IMAGELINK (To be implemented)',
        likes: 21,
        date: '2019-01-02',
        ismine: false,
        contents: 'Gooooood',
        pictures: 'IMAGELINK (To be implemented)',
        commentid : 1,
        rating : 5
    },

    {
        boardid: 0,
        entryid: 321,
        replyid: 22,
        parentreplyid: 41,
        rootreplyid: 4,
        userid: 342,
        username: 'Div',
        profile: 'IMAGELINK (To be implemented)',
        likes: 33,
        date: '2019-03-12',
        ismine: true,
        contents: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Velit aliquet sagittis id consectetur purus ut. Mi proin sed libero enim sed faucibus turpis in. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Ultrices tincidunt arcu non sodales neque sodales. Sed id semper risus in hendrerit gravida. Arcu risus quis varius quam quisque id diam vel. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Leo vel orci porta non pulvinar. Ornare lectus sit amet est placerat in. Magna eget est lorem ipsum. Et malesuada fames ac turpis. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Ante metus dictum at tempor commodo ullamcorper a. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Tellus integer feugiat scelerisque varius.',
        pictures: 'IMAGELINK (To be implemented)',
        commentid : 2,
        rating : 3
    },

    {
        boardid: 0,
        entryid: 112,
        replyid: 342,
        parentreplyid: 31,
        rootreplyid: 3,
        userid: 422,
        username: 'Probius',
        profile: 'IMAGELINK (To be implemented)',
        likes: 10,
        date: '2019-05-16',
        ismine: false,
        contents: '!@#%%!@#!@#',
        pictures: 'IMAGELINK (To be implemented)',
        commentid : 3,
        rating : 1
    },
];

export const TimeTableEntries_Mock = [
    {
        id: 1,
        subject: 'Computer Science',
        professor: 'Won Young Jun',
        timestart: '1000',
        timeend: '1800',
        place: 'ITBT 103'
    },
    {
        id: 412,
        subject: 'Advanced Math',
        professor: 'Superman',
        timestart: '1200',
        timeend: '1300',
        place: 'je2gong'
    },
    {
        id: 777,
        subject: 'Java Programming',
        professor: 'Ktuzer',
        timestart: '1500',
        timeend: '1800',
        place: 'Paiknam Library'
    },
];
 
//courseID, professorId: objectId, overallRating: average
export const CourseRatingEntries_Mock = [
    {
        courseID : 1,
        professorID : 1,
        subject: 'Computer Science',
        professor: 'Won Young Jun',
        overallRating : 4,
        exam : 'More than 4',
        assignment : '2',
        difficulty : 'Hard',
        grade : 'B+'
    },
    {
        courseID : 2,
        professorID : 2,
        subject: 'Techno Business',
        professor: 'Anh Gwangil',
        overallRating : 3,
        exam : '2',
        assignment : '3',
        difficulty : 'Average',
        grade : 'A+'
    },
    {
        courseID : 3,
        professorID : 3,
        subject: 'Introduction to Acting',
        professor: 'Shelly L. Collins',
        overallRating : 5,
        exam : '0',
        assignment : '2',
        difficulty : 'Easy',
        grade : 'A+'
    },
    {
        courseID : 4,
        professorID : 4,
        subject: 'IT Project Management',
        professor: 'Park Mina',
        overallRating : 5,
        exam : '2',
        assignment : '2',
        difficulty : 'Very Easy',
        grade : 'A+'
    },
    {
        courseID : 5,
        professorID : 5,
        subject: 'Social Venture',
        professor: 'Zahin Haissan',
        overallRating : 5,
        exam : '0',
        assignment : 'More than 4',
        difficulty : 'Hard',
        grade : 'P'
    },
    {
        courseID : 6,
        professorID : 6,
        subject: 'React Native',
        professor: 'Punreach Rany',
        overallRating : 1,
        exam : '0',
        assignment : 'More than 4',
        difficulty : 'Hard',
        grade : 'A0'
    },
    {
        courseID : 7,
        professorID : 7,
        subject: 'Hanyang 7 Heart',
        professor: 'Daniel Android',
        overallRating : 1,
        exam : '0',
        assignment : '3',
        difficulty : 'Very Hard',
        grade : 'C0'
    },
    {
        courseID : 8,
        professorID : 8,
        subject: 'Sleeping Therapy',
        professor: 'Won Young Jun',
        overallRating : 4,
        exam : '0',
        assignment : '0',
        difficulty : 'Very Easy',
        grade : 'P'
    },
    {
        courseID : 9,
        professorID : 1,
        subject: 'Artificial Intelligence',
        professor: 'Won Young Jun',
        overallRating : 2,
        exam : '0',
        assignment : '2',
        difficulty : 'Hard',
        grade : 'B+'
    },
    {
        courseID : 10,
        professorID : 1,
        subject: 'Software Engineering',
        professor: 'Won Young Jun',
        overallRating : 3,
        exam : '3',
        assignment : '2',
        difficulty : 'Very Hard',
        grade : 'C+'
    },
    

];

export default {
    BulletinBoardsEntries_Mock, CommentEntries_Mock, BulletinBoardsLists_Mock,
    TimeTableEntries_Mock, CourseRatingEntries_Mock,
}