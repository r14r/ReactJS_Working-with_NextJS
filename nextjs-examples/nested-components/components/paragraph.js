export default function Paragraph({ children }) {
    return (
        <p>
            {children}
            <style jsx>{`
                p {
                    font: 10px Helvetica, Arial;
                    margin: 10px 0;
                }
            `}</style>
        </p>
    );
}
