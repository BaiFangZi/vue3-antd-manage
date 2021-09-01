import request from '@/utils/request'

export const loginIn = (data) =>
  request({
    url: '/loginIn',
    method: 'post',
    data
  })
