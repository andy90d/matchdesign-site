export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>MATCHdesign</h1>

      <p style={styles.subtitle}>
        Graphic design and digital products for brands and creators.
      </p>

      <button style={styles.button}>
        Contattami
      </button>
    </main>
  );
}

const styles = {
  main: {
    padding: 40,
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
    margin: 0,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 16,
    maxWidth: 600,
  },
  button: {
    marginTop: 24,
    padding: "12px 20px",
    fontSize: 16,
    cursor: "pointer",
    width: "fit-content",
  },
};