import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'
let wrapped;
beforeEach(()=>{
    wrapped = mount(<Root><CommentBox /></Root>);

})

afterEach(()=>{
    if(wrapped) wrapped.unmount();

})

it('has a text area and 2 button',()=>{

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('the text area',()=>{

    beforeEach(()=>{
        const textarea = wrapped.find('textarea');
        textarea.simulate('change',{
            target:{
                value:'new comment'
            }
        });
    
        wrapped.update();
    })
    it('users can type in', ()=>{

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    
    })
    
    
    it('submit the form and empty the textarea',()=>{
    
        wrapped.find('form').simulate('submit');
        wrapped.update();
    
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    
    })
})
