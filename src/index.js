import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import './index.css';

function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    }

    return (
        <div>
            <header>header</header>
            <main>main
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <label htmlFor="fullName">お名前</label>
                        {errors.fullName && <p>foo</p>}
                        <input type="text" id="fullName" name="fullName" ref={register({ required: true, minLength: 1})}/>
                    </div>
                    <div className="row">
                        <label htmlFor="mail">メールアドレス</label>
                        <input type="mail" id="mail" name="mail" ref={register({ required: true, minLength: 1})}/>
                        {errors.mail && <p>foo</p>}
                    </div>
                    <div className="row">
                        <label htmlFor="content">内容</label>
                        <textarea type="text" id="content" name="content" ref={register({ required: true, minLength: 1})}/>
                        {errors.content && <p>foo</p>}
                    </div>
                    <div className="row">
                        <input type="checkbox" id="privacy" name="privacy" ref={register({ required: true})}/>
                        <label htmlFor="privacy">プライバシーに同意する</label>
                    </div>
                    <div className="row">
                        <input type="submit" value="送信" name="btn" ref={register({ required: true})}/>
                    </div>
                </form>
            </main>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// function app() {
//     const { register, handleSubmit, watch, errors } = useForm();
//     const onSubmit = data => console.log(data);

//     console.log(watch("example")); // watch input value by passing the name of it

//     return (
//       {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
//       <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//         <input name="example" defaultValue="test" ref={register} />

//         {/* include validation with required or other standard HTML validation rules */}
//         <input name="exampleRequired" ref={register({ required: true })} />
//         {/* errors will return when field validation fails  */}
//         {errors.exampleRequired && <span>This field is required</span>}

//         <input type="submit" />
//       </form>
//     );
//   }

// // class Header extends React.Component {
// //     render() {
// //         return(
// //             <p>foo</p>
// //         );
// //     }
// // }

// // class Main extends React.Component {
// //     render() {
// //         return(
// //             <App />
// //         );
// //     }
// // }

// ReactDOM.render(
//     <div>
// {app()}    </div>,
//     document.getElementById("root")
// );
