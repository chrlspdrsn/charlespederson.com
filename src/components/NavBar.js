import { Card, Link } from '@aws-amplify/ui-react';
import React from 'react';
import "../App.css"

export default function NavBar() {
    return <div>
        <Card className="navbar">
            <Link
                href="/"
                color=""
                textDecoration="underline"
            >
                Home
            </Link>
            <Link
                href="/resume"
                color=""
                textDecoration="underline"
                isExternal={true}
            >
                Resume
            </Link>
            <Link
                href="/contact"
                color=""
                textDecoration="underline"
            >
                Contact
            </Link>
            <Link
                href="/projects"
                color=""
                textDecoration="underline"
            >
                Projects
            </Link>
        </Card>
    </div>
};