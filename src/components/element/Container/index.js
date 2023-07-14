import Container from './src/Container';


Container.install = (Vue) => {
    Vue.component(Container.name, Container);
};

export default Container;