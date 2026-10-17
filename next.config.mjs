// ===== NEXT CONFIG: plugin next-intl =====
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);