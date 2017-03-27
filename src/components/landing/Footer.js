import React from 'react';



const Footer = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4">Features</h2>

            <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                <a className="nav-link active" href="#rest" data-toggle="tab">Mock REST</a>
                <a className="nav-link" href="#unitTesting" data-toggle="tab">Unit Tests</a>
                <a className="nav-link" href="#es2015" data-toggle="tab">ES2015</a>
                <a className="nav-link" href="#others" data-toggle="tab">Others</a>
            </nav>

            <div className="tab-content py-5">
                <div className="tab-pane active" id="rest">
                    <h3>Mock REST</h3>
                    <p>Custom written mock REST</p>
                </div>

                <div className="tab-pane" id="es2015">
                    <h3>ES2015</h3>
                    <p>aka ES6</p>
                </div>

                <div className="tab-pane" id="unitTesting">
                    <h3>Unit Testing</h3>
                    <ul>
                        <li>Jest</li>
                        <li>Enzyme</li>
                        <li>Nock</li>
                        <li>Expect assertion</li>
                        <li>Code coverage</li>
                    </ul>
                </div>

                <div className="tab-pane" id="others">
                    <h3>Others</h3>
                    <ul>
                        <li>Redux</li>
                        <li>Redux Form</li>
                        <li>Lodash</li>
                        <li>React Bootstrap Table</li>
                        <li>Font Awesome (for icons)</li>
                        <li>Hot Module Replacement (HMR)</li>
                        <li>nsp (Node Security) - scans vulnerabilities at dev startup</li>
                        <li>Webpack2 CommonsChunkPlugin bundle splitting</li>
                        <li> Dynamic HTML generation: html-webpack-plugin</li>
                        <li>Asset gzip</li>
                        <li>CSS minification: extract-text-webpack-plugin</li>
                    </ul>
                </div>                
            </div>
        </footer>
    );
};





export default Footer;
