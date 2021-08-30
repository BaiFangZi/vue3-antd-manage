import request from '@/utils/http'

// export

export const login = (data: any) =>
  request({
    url: '/login',
    method: 'post',
    data,
  })
