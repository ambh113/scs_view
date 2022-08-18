import { Cookies } from 'quasar';
// import { axios } from './axios';

export default async ({ router, store }) => {
    router.beforeEach(async (to, from, next) => {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (Cookies.get('isLoggedIn')) {
                next();
            } else {
                next({name: 'home'});
            }
        } else {
            next();
        }
    });
}