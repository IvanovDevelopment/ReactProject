import React, { Fragment } from 'react';
import { useState } from 'react';





export function Nodes() {

    return (
        <>
            <form>
                <div className="form-group">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h6>X</h6>
                            <input                           
                                type="text"
                                className="form-control mt-2"
                            />
                        </div>
                        <div className="col-md-4">
                            <h6>Y</h6>
                            <input

                                type="text"
                                className="form-control mt-2"
                            />
                        </div>
                        <div className="col-md-4">
                            <h6>Z</h6>
                            <input


                                type="text"
                                className="form-control mt-2"
                            />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary">Добавить</button>
                    <ul>
                        
                    </ul>
                </div>
            </form>
        </>
    )
}