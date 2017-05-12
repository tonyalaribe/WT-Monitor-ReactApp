// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [


    {
      name: 'authWrapper',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/AuthWrapper/reducer'),
          System.import('containers/AuthWrapper/sagas'),
          System.import('containers/AuthWrapper'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('authWrapper', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },

      childRoutes: [
        {
          path: '/',
          name: 'home',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/HomePage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {

          name: 'userContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/UserContainer/reducer'),
              System.import('containers/UserContainer/sagas'),
              System.import('containers/UserContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('userContainer', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);

          },
          childRoutes: [
            {
             path: '/:user/screenshots',
             name: 'userScreenshots',
             getComponent(nextState, cb) {
               const importModules = Promise.all([
                 System.import('containers/UserScreenshots/reducer'),
                 System.import('containers/UserScreenshots/sagas'),
                 System.import('containers/UserScreenshots'),
               ]);

               const renderRoute = loadModule(cb);

               importModules.then(([reducer, sagas, component]) => {
                 injectReducer('userScreenshots', reducer.default);
                 injectSagas(sagas.default);
                 renderRoute(component);
               });

               importModules.catch(errorLoading);
             },
           }, {
             path: '/:user/timelog',
             name: 'userTimeLog',
             getComponent(nextState, cb) {
               const importModules = Promise.all([
                 System.import('containers/UserTimeLog/reducer'),
                 System.import('containers/UserTimeLog/sagas'),
                 System.import('containers/UserTimeLog'),
               ]);

               const renderRoute = loadModule(cb);

               importModules.then(([reducer, sagas, component]) => {
                 injectReducer('userTimeLog', reducer.default);
                 injectSagas(sagas.default);
                 renderRoute(component);
               });

               importModules.catch(errorLoading);
             },
           },{
             path: '/:user/archive',
             name: 'userArchive',
             getComponent(nextState, cb) {
               const importModules = Promise.all([
                 System.import('containers/UserArchive/reducer'),
                 System.import('containers/UserArchive/sagas'),
                 System.import('containers/UserArchive'),
               ]);

               const renderRoute = loadModule(cb);

               importModules.then(([reducer, sagas, component]) => {
                 injectReducer('userArchive', reducer.default);
                 injectSagas(sagas.default);
                 renderRoute(component);
               });

               importModules.catch(errorLoading);
             },
           }, 
          ],
        },
      ],
    },{
      path: '/login',
      name: 'loginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginPage/reducer'),
          System.import('containers/LoginPage/sagas'),
          System.import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('loginPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },  {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
