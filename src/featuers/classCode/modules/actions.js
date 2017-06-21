import axios from '@/components/axios/'
import * as types from './mutationTypes'

/** 获取班级信息 */
export const getCode = ({ rootState, commit }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'teacher/share/class',
      params: {
        subjectId: rootState.route.params.code
      }
    })
    .then((response) => {
      commit(types.CODE, response.data.data)
      resolve(response)
    })
  })
}