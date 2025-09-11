import { api } from "@/libs/api"

export const getDashboardStats = async () => {
  return api<APIGetDashboardStats>({
    endpoint: "/dashboard/"
  })
}