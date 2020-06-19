import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './css/index.css';

function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    }

    return (
        <div className="container">
            <header>
                <h1 className="h2 text-center pt-2 pb-2 text-de">Form</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <label htmlFor="fullName">お名前</label>
                        {errors.fullName && errors.fullName.type === 'required' && <p>入力されていません。</p>}
                        <input className="inputInput" type="text" id="fullName" name="fullName" ref={register({ required: true, minLength: 1})}/>
                    </div>
                    <div className="row">
                        <label htmlFor="mail">メールアドレス</label>
                        {errors.mail && <p>入力されていません。</p>}
                        <input className="inputInput" type="mail" id="mail" name="mail" ref={register({ required: true, minLength: 1})}/>
                    </div>
                    <div className="row">
                        <label htmlFor="content">内容</label>
                        {errors.content && <p>入力されていません。</p>}
                        <textarea className="inputInput" type="text" id="content" name="content" ref={register({ required: true, minLength: 1})}/>
                    </div>
                    <div className="row center">
                        <input type="checkbox" id="privacy" name="privacy" ref={register({ required: true})}/>
                        <label className="labelPrivacy" htmlFor="privacy">プライバシーに同意する</label>
                    </div>
                    <div className="row center">
                        {errors.privacy && <p>チェックがされていません。</p>}
                        <input type="submit" value="送信" name="btn" ref={register({ required: true})}/>
                    </div>
                </form>
            </main>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
