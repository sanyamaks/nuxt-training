export default ({ store }) => {
  store.app.router.beforeEach((to, form, next) => {
    store.commit('mobileMenu/closeMobile');
    next();
  });
};
