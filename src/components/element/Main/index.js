import Main from './src/Main';


Main.install = (Vue) => {
    Vue.component(Main.name, Main);
};

export default Main;