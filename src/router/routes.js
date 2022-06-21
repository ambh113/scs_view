const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: '/home',
                component: () =>
                    import ('pages/Home'),
            },
            {
                path: '/profile',
                component: () =>
                    import ('pages/Alumini_dashboard'),
                children: [{
                        path: 'personalDetails',
                        name: 'personal-details',
                        component: () =>
                            import ('pages/PersonalDetails')
                    },
                    {
                        path: 'about',
                        component: () =>
                            import ('pages/About')
                    }
                ]
            }
        ]
    },
    // {
    //     path: '/login',
    //     component: () =>
    //         import ('pages/auth/Login.vue')
    // },
    // {
    //     path: '/candidate',
    //     component: () =>
    //         import ('pages/Candidate.vue'),
    // },


    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes