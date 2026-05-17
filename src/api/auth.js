/**
 * 登录认证 API 接口桩
 *
 * 【接口规范】
 *   POST /api/auth/login
 *   Content-Type: application/json
 *
 * 【请求参数】
 *   {
 *     email: string,      // 用户邮箱
 *     password: string,   // 用户密码
 *     remember: boolean   // 是否记住登录状态
 *   }
 *
 * 【成功响应】
 *   {
 *     code: 0,
 *     message: "登录成功",
 *     data: {
 *       token: string,         // JWT 令牌
 *       expiresIn: number,     // 过期时间（秒）
 *       user: {
 *         id: string,
 *         name: string,
 *         email: string,
 *         avatar: string
 *       }
 *     }
 *   }
 *
 * 【错误响应】
 *   {
 *     code: 1001,
 *     message: "邮箱或密码错误",
 *     data: null
 *   }
 */

const MOCK_DELAY = 800

export async function loginApi({ email, password, remember }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject(new Error('请输入邮箱和密码'))
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        reject(new Error('邮箱格式不正确'))
        return
      }
      if (password.length < 6) {
        reject(new Error('密码长度不能少于6位'))
        return
      }

      resolve({
        code: 0,
        message: '登录成功',
        data: {
          token: 'mock_jwt_token_' + Date.now(),
          expiresIn: 86400 * 30,
          user: {
            id: 'u_' + Date.now(),
            name: email.split('@')[0],
            email,
            avatar: 'https://i.pravatar.cc/80?u=' + email,
          },
        },
      })
    }, MOCK_DELAY)
  })
}

export async function logoutApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ code: 0, message: '已退出登录' })
    }, 300)
  })
}

export async function refreshTokenApi(refreshToken) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {
          token: 'mock_refreshed_token_' + Date.now(),
          expiresIn: 86400 * 30,
        },
      })
    }, 300)
  })
}
