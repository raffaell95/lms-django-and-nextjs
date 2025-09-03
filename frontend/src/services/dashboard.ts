import { api } from "@/lib-example/api"

export const getDashboardStats = async () => {
  return api<APIGetDashboardStats>({
    endpoint: "/dashboard/"
  })
}