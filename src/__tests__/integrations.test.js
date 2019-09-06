import React from 'react';
import { mount } from 'enzyme'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status:200,
        response: [{name:'Fetched #1'}, {name: 'Fetched #2'}]
    })
})

afterEach(()=>{
    moxios.uninstall();

})

it.only('can fetch a list of comments and display them',(done)=>{
    //attemp to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    //find the 'fetchComments' button and click
    wrapped.find('.fetch-comments').simulate('click');

    //introduce some pause for fetch
    moxios.wait(()=>{
        wrapped.update();

        //Expect to find a list of comments
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    })

})