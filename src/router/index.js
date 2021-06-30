import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/auth/auth.vue";
import Connexion from "../views/auth/connexion.vue";
import Restaurer from "../views/auth/restaurer.vue";
import Oublie from "../views/auth/oublie.vue";
import Index from "../views/Index.vue"
import Enseignant from "../views/enseignant/Enseignant.vue"
import Etudiant from "../views/etudiant/Etudiant.vue"
import Dashboard from "../views/admin/Dashboard.vue"
import Classes from "../views/admin/Classes.vue"
import Modules from "../views/admin/Modules.vue"
import Seances from "../views/admin/Seances.vue"
import Notes from "../views/enseignant/Notes.vue"
import Pfes from "../views/enseignant/Pfes.vue"
import Admin from "../views/admin/Admin.vue"

import Enseignants from "../views/admin/Enseignants.vue"
import Etudiants from "../views/admin/Etudiants.vue"

const routes = [
  {
    path:'/',
    component:Index,
    beforeEnter(to,from,next){
      let currentUser = window.localStorage.currentUser
      if(currentUser){
        currentUser = JSON.parse(currentUser)
        if(currentUser.admin){
          next("/app/admin");
        }
        if(currentUser.prof){
          next("/app/enseignant");
        }
        if(currentUser.etu){
          next("/app/etudiant");
        }
      }
      else{
        next({name:'connexion'})

      }
    },
  },
  {
    
    
    
    path:'/auth',
    component: Auth,
    name:'auth',
    beforeEnter(to,from,next){
         let currentUser = window.localStorage.currentUser
         if (currentUser) {
          next('/')
         }
         else{
           next()
         }

    },
    redirect:'/auth/connexion',
    children: [
      {
        path: 'connexion',
        component: Connexion,
        name:'connexion',
      },
      {
        path: 'restaurer',
        component: Restaurer,
        name:'restaurer',
      },
      {
        path: 'oublie',
        component: Oublie,
        name:'oublie',
      },
      
    ]
  },

  {
    path:'/app',
    component:Index,
    children:[
      {
        path:"admin",
        component:Admin,
        redirect:"/app/admin/dashboard",
        children:[
          {
            path:"dashboard",
            component:Dashboard,
            name:"dashboard"
          },
          {
            path:"classes",
            component:Classes,
            name:"classes"
          },

          {
            path:"modules",
            component:Modules,
            name:"modules"
          },
          
          {
            path:"etudiants",
            component:Etudiants,
            name:"etudiants"
          },

          {
            path:"enseignants",
            component:Enseignants,
            name:"enseignants"
          },

          {
            path:"seances",
            component:Seances,
            name:"seances"
          },

          
        ]
      },
      {
        path:"enseignant",
        component:Enseignant,
        redirect:"/app/enseignant/notes",
        children:[
          {
            path:"notes",
            component:Notes,
            name:"notes"
          },
          {
            path:"pfes",
            component:Pfes,
            name:"pfes"
          },
        ]

      },
      {
        path:"etudiant",
        component:Etudiant
      },
    ],

  },
 
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to,from,next)=>{

  let currentUser = window.localStorage.currentUser
  if(to.name!=='connexion' && to.name!=='restaurer' && to.name!=='oublie' && !currentUser) {
    next({name:'connexion'})
  }else {
    next()
  }
});

export default router;
