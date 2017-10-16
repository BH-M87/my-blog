import { observable, computed, action } from 'mobx';

class Store {
  name = 'MyBlog';
  description = 'My own blog pages based on react and mobx!';
  @observable numClicks = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }

  @action clickButton() {
    this.numClicks++;
  }
}

export default Store;
