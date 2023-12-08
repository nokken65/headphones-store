type KeyOf<T> = T extends object ? keyof T : never

export type { KeyOf }
