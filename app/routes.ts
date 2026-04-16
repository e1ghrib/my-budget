import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/dashboard.tsx"),
  route("stats", "routes/stats.tsx"),
  route("scan", "routes/scan.tsx"),
  route("factures", "routes/factures.tsx"),
  route("conseils", "routes/conseils.tsx"),
] satisfies RouteConfig;
