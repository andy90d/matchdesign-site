export function IubendaHead() {
  return (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script src="https://embeds.iubenda.com/widgets/f2cc20d5-bfbe-4c85-880d-6c958cd3c60c.js"></script>
  );
}

export function IubendaLinks() {
  return (
    <>
      <a
        href="https://www.iubenda.com/privacy-policy/18476717"
        className="iubenda-black iubenda-noiframe iubenda-embed"
        title="Privacy Policy"
      >
        Privacy Policy
      </a>
      <span style={{ margin: "0 10px" }}>|</span>
      <a
        href="https://www.iubenda.com/privacy-policy/18476717/cookie-policy"
        className="iubenda-black iubenda-noiframe iubenda-embed"
        title="Cookie Policy"
      >
        Cookie Policy
      </a>
    </>
  );
}

export function IubendaLoader() {
  return <script id="iubenda-policy-script" src="https://cdn.iubenda.com/iubenda.js" defer></script>;
}