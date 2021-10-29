import Container from "../Grid/Container";

export default function Section({className, children}){
    return(<section className={className}>
        <Container>{children}</Container>
    </section>)
}