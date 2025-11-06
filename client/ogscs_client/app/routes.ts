import { type RouteConfig, index, layout, route, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    layout("auth/layout.ts", [
        route("/login", "./auth/login.ts"),
        route("/login", "./auth/register.ts"),
    ]),
    ...prefix("student", [
        index("./student/dashboard.tsx"),
        route("settings", "student/settings.tsx"),
        route("clearance", "student/clearance.tsx"),
        route("payments", "student/payments.tsx"),
        route("documents", "student/documents.tsx")
    ]),
    ...prefix("official", [
        index("./officials.tsx"),
        route("clearance", "official/clearance.tsx")
    ])
] satisfies RouteConfig;
