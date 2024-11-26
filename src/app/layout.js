import "./globals.css";
import SessionWrapper from'./components/SessionWrapper'


export default function RootLayout({ children }) {
  return (

    <SessionWrapper>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </SessionWrapper>
    

    
  );
}
