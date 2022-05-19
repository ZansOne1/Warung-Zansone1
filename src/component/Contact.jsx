import React, { Component } from 'react';
// import './Contact.css';
class Contact extends Component {
    state = {}
    render() {
        return (
            <div id="contact">
                <div className='section-4'>
                    <form action='' method='post' className='down'>
                        <table>
                            <tr>
                                <td><input type="text" name='nama' placeholder='Nama Lengkap' /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='email' placeholder='Email' /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='telpon' placeholder='No Telepon' /></td>
                            </tr>
                            <tr>
                                <td><textarea name="pesan" id="pesan" cols="80" rows="20"></textarea></td>
                            </tr>
                            <tr>
                                <td><button type='submit' name='submit' class="btn btn-success">KIRIM</button></td>
                                <td className='phone'><a href=''><i class="fa-brands fa-whatsapp"></i></a></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;