// 全局组件声明

declare module 'vue' {
  export interface GlobalComponents {
    // MbNavBar: typeof import('@/components/mbNavBar')['MbNavBar']
    GayButton: typeof import('../components/index')['GayButton']
  }
}

export {}
