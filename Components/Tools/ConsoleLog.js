/*
작성자 : 추헌남
최초작성일 : 2019/09/11
설명 : JSX 태그에서 콘솔을 사용할 수 있게 해주는 도구
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    안받음
*/

export default ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
      };