import React from 'react';
import {Form, FormGroup, Label, Input, Container, Card, CardBody, CardHeader, Button} from 'reactstrap';
import axios from 'axios';


class FormVid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            files:null
        }
       
    }

    onFileChange=e=>{
        let files = e.target.files || e.dataTransfer.files;
        if(!files.length){

        }else{
            this.setState({files:files[0]});
        }
    }

    uploadData(){
        const formData = new FormData();
        formData.append('files', this.state.files);
        axios.post('http://localhost:3500/submit-form', formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then((res)=>{

        });
    }

    render(){

        return(
            <Container>
                <Form>
                    <FormGroup>
                        <Label>Nama : </Label>
                        <Input type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Link : </Label>
                        <Input type="file" onChange={this.onFileChange}/>
                    </FormGroup>
                    <Button color="primary" onClick={ev=>this.uploadData()}>Kirim</Button>
                </Form>
            </Container>
        )
    }
}
export default FormVid;