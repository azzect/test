import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    // ifs
    userForm: false,
    userInfo: false,

    userAdding: {
      fullName: '',
      telephone: '',
      eMail: '',
      card: []
    },

    choosedUser: null,
    choosedUserIndex: null,

    userListLenght: 0,
    userList: [],

    pageDate: null
  },
  getters: {
  },

  actions: {
    checkingSession (context) {
      context.commit('checkingSession')
    },
    login (context, data) {
      context.commit('login', data)
    },
    loadingUserList (context) {
      context.commit('loadingUserList')
    },
    userForm (context) {
      context.commit('userForm')
    },
    userAdding (context) {
      context.commit('userAdding')
      context.commit('saveUserList')
    },
    exit (context) {
      context.commit('exit')
    },
    chooseUser (context, data) {
      context.commit('chooseUser', data)
    },
    userInfoCancel (context) {
      context.commit('userInfoCancel')
    },
    updateUser (context, user) {
      context.commit('updateUser', user)
      context.commit('saveUserList')
    },
    fillPageDate (context, link) {
      context.state.pageDate = null
      context.commit('fill' + link)
    }
  },

  mutations: {
    checkingSession (state) {
      const localToken = localStorage['token']
      if (localToken == null) {
        state.token = null
      } else {
        state.token = localToken
      }
    },
    login (state, data) {
      if (data.login === '') {
        alert('Enter login')
        return
      }
      if (data.password === '') {
        alert('Enter password')
        return
      }
      localStorage.setItem('token', '111')
    },
    loadingUserList (state) {
      var localValue = localStorage['userList']
      if (localValue == null) {
        return
      }
      state.userList = JSON.parse(localStorage['userList'])
      state.userListLenght = state.userList.length
    },
    userForm (state) {
      if (state.userForm === false) {
        state.userInfo = false
      } else {
        state.userInfo = true
      }
      state.userAdding.fullName = ''
      state.userAdding.telephone = ''
      state.userAdding.eMail = ''
      state.userForm = !state.userForm
    },
    userAdding (state) {
      let newUser = {
        fullName: state.userAdding.fullName,
        telephone: state.userAdding.telephone,
        eMail: state.userAdding.eMail,
        card: []
      }
      console.log(newUser)
      if (newUser.fullName === '') {
        alert("Enter User's full name")
        return
      }
      if (newUser.telephone === '') {
        alert("Enter User's telephone")
        return
      }
      if (newUser.eMail === '') {
        alert("Enter User's email")
        return
      }
      let step = 0
      for (step = 0; step < 3; step++) {
        let stringNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1
        if (stringNumber === 1) {
          const data = {
            tittle: 'Random Cat',
            text: 'Page with 5 random cats pictures',
            link: '/cats'
          }
          newUser.card[step] = data
        }
        if (stringNumber === 2) {
          const data = {
            tittle: 'Random Dog',
            text: "Page with random dog's pictures",
            link: '/dogs'
          }
          newUser.card[step] = data
        }
        if (stringNumber === 3) {
          const data = {
            tittle: "NBA's teams",
            text: "Page about 30 NBA's teams",
            link: '/nba'
          }
          newUser.card[step] = data
        }
        if (stringNumber === 4) {
          const data = {
            tittle: 'Show',
            text: "Page about show's 2013-07-01 on tvmaze.com",
            link: '/show'
          }
          newUser.card[step] = data
        }
        if (stringNumber === 5) {
          const data = {
            tittle: 'SpaceX',
            text: "Page about latest SpaceX's launches",
            link: '/spacex'
          }
          newUser.card[step] = data
        }
      }
      console.log(state.userList)

      state.userListLenght++
      let length = state.userList.length
      state.userList[length] = newUser
    },
    saveUserList (state) {
      localStorage.setItem('userList', JSON.stringify(state.userList))
    },
    exit () {
      localStorage.clear()
    },
    chooseUser (state, data) {
      state.choosedUser = data.user
      state.choosedUserIndex = data.index
      state.userForm = false
      state.userInfo = true
    },
    userInfoCancel (state) {
      state.userInfo = false
    },
    updateUser (state, user) {
      if (user.fullName === '') {
        alert("Enter User's full name")
        return
      }
      if (user.telephone === '') {
        alert("Enter User's telephone")
        return
      }
      if (user.eMail === '') {
        alert("Enter User's email")
        return
      }
      state.choosedUser = user
      state.userList[state.choosedUserIndex] = user
    },
    //  for fillPageDate
    fillCats (state) {
      let cats = []
      let step
      for (step = 0; step < 5; step++) {
        Axios.get('https://aws.random.cat/meow').then((response) => {
          console.log(response.data.file)
          cats[cats.length] = response.data.file
          if (cats.length === 5) {
            state.pageDate = cats
          }
        })
      }
    },
    fillDog (state) {
      Axios.get('https://random.dog/woof.json').then((response) => {
        state.pageDate = response.data.url
        self.see = true
      }).catch((error) => {
        console.error(error)
      })
    },
    fillNBA (state) {
      Axios.get('https://www.balldontlie.io/api/v1/teams').then((response) => {
        state.pageDate = response.data.data
      })
    },
    fillShow (state) {
      Axios.get('http://api.tvmaze.com/shows/1/episodesbydate?date=2013-07-01').then((response) => {
        state.pageDate = response.data[0]
      })
    },
    fillSpaceX (state) {
      Axios.get('https://api.spacexdata.com/v3/launches/latest').then((response) => {
        state.pageDate = response.data
      })
    }
  }
})

export default store
