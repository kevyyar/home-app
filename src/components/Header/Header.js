import React from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
} from 'carbon-components-react';

import {
    Settings16
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const MainHeader = () => (
    <HeaderContainer
        render={() => (
            <Header aria-label="Home app">
                <SkipToContent />
                <HeaderName element={Link} to="/" prefix="HOME">
                    app
                </HeaderName>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Settings">
                        <Settings16 />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        )}
    />
);

export default MainHeader;