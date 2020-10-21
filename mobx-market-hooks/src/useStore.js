// stores 폴더에 생길 모든 스토어들을 한 곳을 통해 불러들이게끔 하기 위해 custom Hook 작성
import { counter } from './stores/counter';

const useStore = () => {
  return { counter };
};

export default useStore;
