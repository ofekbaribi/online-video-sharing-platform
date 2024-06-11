package com.example.viewtube;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.viewtube.managers.UsersManager;

public class LoginActivity extends AppCompatActivity {

    EditText username;
    EditText password;
    Button login;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        username = findViewById(R.id.username);
        password = findViewById(R.id.password);
        login = findViewById(R.id.login);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                authenticateUser();
            }
        });
    }

    boolean isEmpty(EditText text) {
        CharSequence str = text.getText().toString();
        return TextUtils.isEmpty(str);
    }

    void authenticateUser() {
        if (isEmpty(username)) {
            username.setError("Username is required!");
            return;
        }

        if (isEmpty(password)) {
            password.setError("Password is required!");
            return;
        }

        String user = username.getText().toString();
        String pass = password.getText().toString();

        if (UsersManager.getInstance().authenticate(user, pass)) {
            Toast.makeText(this, "Login successful!", Toast.LENGTH_SHORT).show();

            Intent intent = new Intent(LoginActivity.this, HomeActivity.class);
            startActivity(intent);
            finish();
        } else {
            Toast.makeText(this, "Invalid username or password!", Toast.LENGTH_SHORT).show();
        }
    }
}
