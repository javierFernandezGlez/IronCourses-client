import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function CoursePublished(setPublished) {
    return (
        <div class="text-center" style={{marginTop: "5%"}}>
                        <h6>Ready to publish this course?</h6>
                        <BootstrapSwitchButton
                            style={{display: "flex", alignItems: "center"}}
                            width={75}
                            checked={false}
                            onlabel='Yes'
                            offlabel='No'
                            onstyle="dark"
                            onChange={(checked) => {
                                console.log("The value of checked is ", checked);
                                setPublished(checked)
                            }}
                        />
                    </div>
    );
}

export default CoursePublished;

