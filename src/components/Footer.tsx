interface FooterProps {
  year: number
}

function Footer({ year }: FooterProps) {
  return <footer>© {year} My React Application</footer>
}

export default Footer