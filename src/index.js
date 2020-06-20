import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    }

    return (
        <div className="container">
            <header className="border-bottom-dark">
                <h1 className="h2 text-center pt-2 pb-2">Form</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="fullName">お名前</label>
                        {errors.fullName && errors.fullName.type === 'required' && <p>入力されていません。</p>}
                        <input className="form-control" type="text" id="fullName" name="fullName" ref={register({ required: true, minLength: 1})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">メールアドレス</label>
                        {errors.mail && <p>入力されていません。</p>}
                        <input className="form-control" type="mail" id="mail" name="mail" ref={register({ required: true, minLength: 1})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">内容</label>
                        {errors.content && <p>入力されていません。</p>}
                        <textarea className="form-control" type="text" id="content" name="content" ref={register({ required: true, minLength: 1})}/>
                    </div>
                    <div className="form-group">
                        <input className="form-check-input" type="checkbox" id="privacy" name="privacy" ref={register({ required: true})}/>
                        <label className="form-check-label" htmlFor="privacy">プライバシーに同意する</label>
                    </div>
                    <div className="form-group">
                        {errors.privacy && <p>チェックがされていません。</p>}
                        <input className="btn btn-primary" type="submit" value="送信" name="btn" ref={register({ required: true})}/>
                    </div>
                </form>
            </main>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Form />, rootElement);
