import { ColorModeScript } from '@chakra-ui/color-mode';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: <>{initialProps.styles}</>,
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
